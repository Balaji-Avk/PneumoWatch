import tensorflow as tf
import numpy as np
from flask import Flask, request, jsonify

from flask_cors import CORS

app=Flask(__name__)

CORS(app,resources={r"/predict/*": {"origins": "*"}})


# Load the TFLite model
interpreter = tf.lite.Interpreter(model_path="mn_my_model.tflite")
interpreter.allocate_tensors()

# Define input and output details
input_details = interpreter.get_input_details()
output_details = interpreter.get_output_details()

@app.route('/',methods=['GET'])
def startServer():
    return "if you are seeing this, means server has started"

@app.route('/predict', methods=['POST'])
def successor():    
    f = request.files['file'] 
    f = f.read()  
    
    # Preprocess the image
    preprocessed_img = preprocess_img(f)

    # Run inference
    interpreter.set_tensor(input_details[0]['index'], preprocessed_img)
    interpreter.invoke()
    output_data = interpreter.get_tensor(output_details[0]['index'])
    try:
        num=float(output_data[0][0])
        result=True if (num>0.5) else False
    except ValueError:
        result=False
    return jsonify({'prediction': result})
    
def preprocess_img(img):

   img = tf.image.decode_image(img, channels=3)
   image = tf.image.resize(img,[256,256])
   imgArr = tf.keras.utils.img_to_array(image)/255.0
   imgReshape = np.expand_dims(imgArr, axis=0)

   return imgReshape

#runs on default port 5000
if __name__ == '__main__':
    app.run()
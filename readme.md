
# PneumoWatch

A user-friendly web application designed to aid in the rapid
detection of pneumonia from chest X-ray images. Utilizing machine
learning algorithms,our solution analyses uploaded images in realtime, providing instant feedback on the presence or absence of
pneumonia. With a focus on simplicity and efficiency, PneumoWatch
aims to assist healthcare professionals in making timely and
accurate diagnoses, ultimately improving patient outcomes and
enhancing overall healthcare efficiency.


## Local Setup
Run Backend first then start frontend

Backend
```bash
  pip install flask tensorflow flask_cors numpy
  cd backend
  python server.py
```
Frontend

```bash
  cd frontend
  npm install
```
head over to "pneumowatch/frontend/src/components/imgForm.jsx"

```bash
  replace https://balajiavk.pythonanywhere.com/predict with http://localhost:5000/

```

start the frontend server

```bash
  npm run dev
```

## Screenshots

![image](https://github.com/Balaji-Avk/PneumoWatch/assets/132835499/63cd8452-1ec4-4bc4-ac78-bfb57494287c)

![image](https://github.com/Balaji-Avk/PneumoWatch/assets/132835499/1d29dece-7779-4d96-b402-28ee21031ca5)

![image](https://github.com/Balaji-Avk/PneumoWatch/assets/132835499/7c3fb594-920d-4409-9cbb-c698fd04ad0e)


## Accuracy

![image](https://github.com/Balaji-Avk/PneumoWatch/assets/132835499/4282a99d-e8f0-4926-9bfc-bc8f72c3919f)


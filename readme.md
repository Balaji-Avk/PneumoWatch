
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
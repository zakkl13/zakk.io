# zakk.io
Full source code for http://zakk.io   *Currently Under Development*

This is the code for the Django (http://djangoproject.com) project. To replicate:
For *nix:
1. Install python 2.7
2. Install python-pip (https://pypi.python.org/pypi/pip)
3. Install Django ($ pip install django)
4. Clone the git repo to a directory ($ git clone <url>)
5. Create local_settings.py under zakkio/local_settings.py . Example local_settings.py:

```python
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = ''

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.<backend>',
        'NAME': os.path.join(BASE_DIR, '<db_file_name>'),
    }
}
```

6. In base directory, run ($ python manage.py migrate )
7. Verify success by running ($ python manage.py runserver) and then check http://localhost:8000

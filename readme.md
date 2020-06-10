# Nuxt + Django + Auth

Demo project that implements Facebook Auth with Nuxt and Django

![Demo gif](https://media.giphy.com/media/hsC45K9bgX8mFEhgFm/source.gif)

## Setting up

First, make sure you have created an [app on Facebook](https://developers.facebook.com/)

Have your `app_id` and `app_secret` handy for the next steps.

### Configuring the Frontend

Install [Yarn](https://yarnpkg.com/) if you haven't already.

1. Navigate to `frontend/`
2. Run `yarn install` to install all dependencies
3. Rename `.template.env` to `.env` and update it with your `app_id`
4. Start the server with `yarn dev`

You'll find your app available at [localhost:3000](http://localhost:3000). You won't be able to log in yet, though.

### Configuring the Backend

This step assumes you're using Python 3.x

1. Navigate to `backend/`
2. Run `pip install -r requirements.txt` to install all dependencies
3. Run `python manage.py migrate` to create the database
4. Create a superuser with `python manage.py createsuperuser`
5. Start your server with `python manage.py runserver_plus`
6. Login using your admin credentials [localhost:8000/admin](http://localhost:8000/admin)
7. Click on [Social applications](http://localhost:8000/admin/socialaccount/socialapp/add/) and create a new Facebook application with your `app_id` and `app_secret`

Done! Now you may go back to [localhost:3000](http://localhost:3000) and log in.

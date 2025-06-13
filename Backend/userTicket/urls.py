from django.urls import path
from . import views
# from .views import SignupView, LoginView

urlpatterns = [
    path('hello/',views.say_hello),
    # path('signup/', SignupView.as_view(), name='signup'),
    # path('login/', LoginView.as_view(), name='login'),
]
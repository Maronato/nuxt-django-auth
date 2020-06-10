from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveAPIView
from .serializers import UserSerializer

User = get_user_model()


class UserInfo(RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_object(self):
        return self.request.user

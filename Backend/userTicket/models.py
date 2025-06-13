from django.db import models
from userLogin.models import CustomUser  # Adjust if your user model path is different

class Ticket(models.Model):
    STATUS_CHOICES = [
        ('Open', 'Open'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved'),
        ('Closed', 'Closed'),
    ]

    PRIORITY_CHOICES = [
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
        ('Urgent', 'Urgent'),
    ]

    ESCALATION_LEVEL_CHOICES = [
        (0, 'Normal'),
        (1, 'Escalated'),
        (2, 'Auto-Escalated'),
    ]

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='tickets')
    subject = models.CharField(max_length=255)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Open')
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='Low')
    category = models.CharField(max_length=100)
    escalation_level = models.IntegerField(choices=ESCALATION_LEVEL_CHOICES, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Ticket #{self.id} - {self.subject}"

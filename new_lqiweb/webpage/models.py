from django.db import models

# Create your models here.

class Pricetable2(models.Model):
    code = models.IntegerField(db_column='CODE', primary_key=True)  # Field name made lowercase.
    build_type = models.CharField(db_column='BUILD_TYPE', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pricetable2'


class Pricetable3(models.Model):
    code = models.IntegerField(db_column='CODE', primary_key=True)  # Field name made lowercase.
    build_type = models.CharField(db_column='BUILD_TYPE', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pricetable3'

class Pricetable1(models.Model):
    id = models.IntegerField(db_column='ID', primary_key=True)  # Field name made lowercase.
    f30 = models.CharField(db_column='F30', unique=True, max_length=50)  # Field name made lowercase.
    f32 = models.CharField(db_column='F32', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f00 = models.CharField(db_column='F00', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f01 = models.OneToOneField(Pricetable2, on_delete=models.CASCADE, related_name='pricetable1_f01', db_column='F01', blank=True, null=True)
    f11 = models.OneToOneField(Pricetable3, on_delete=models.CASCADE, related_name='pricetable1_f11', db_column='F11', blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'pricetable1'

class Pricetable4(models.Model):
    id = models.OneToOneField(Pricetable1, on_delete=models.CASCADE, related_name='pricetable4_f01', db_column='ID', primary_key=True)  # Field name made lowercase.
    f02 = models.TextField(db_column='F02', blank=True, null=True)  # Field name made lowercase.
    f03 = models.FloatField(db_column='F03', blank=True, null=True)  # Field name made lowercase.
    f04 = models.CharField(db_column='F04', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f05 = models.CharField(db_column='F05', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f06 = models.CharField(db_column='F06', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f08 = models.CharField(db_column='F08', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f09 = models.CharField(db_column='F09', max_length=70, blank=True, null=True)  # Field name made lowercase.
    f10 = models.CharField(db_column='F10', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f12 = models.CharField(db_column='F12', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f13 = models.CharField(db_column='F13', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f15 = models.FloatField(db_column='F15', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pricetable4'


class Pricetable5(models.Model):
    id = models.OneToOneField(Pricetable1, on_delete=models.CASCADE, related_name='pricetable5_f01', db_column='ID', primary_key=True)  # Field name made lowercase.
    f07 = models.CharField(db_column='F07', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f14 = models.CharField(db_column='F14', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f26 = models.FloatField(db_column='F26', blank=True, null=True)  # Field name made lowercase.
    f27 = models.FloatField(db_column='F27', blank=True, null=True)  # Field name made lowercase.
    f28 = models.CharField(db_column='F28', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f29 = models.CharField(db_column='F29', max_length=200, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pricetable5'


class Pricetable6(models.Model):
    id = models.OneToOneField(Pricetable1, on_delete=models.CASCADE, related_name='pricetable6_f01', db_column='ID', primary_key=True)  # Field name made lowercase.
    f16 = models.CharField(db_column='F16', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f17 = models.CharField(db_column='F17', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f18 = models.CharField(db_column='F18', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f19 = models.CharField(db_column='F19', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f20 = models.CharField(db_column='F20', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f23 = models.CharField(db_column='F23', max_length=45, blank=True, null=True)  # Field name made lowercase.
    f24 = models.FloatField(db_column='F24', blank=True, null=True)  # Field name made lowercase.
    f25 = models.FloatField(db_column='F25', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pricetable6'


class Pricetable7(models.Model):
    id = models.OneToOneField(Pricetable1, on_delete=models.CASCADE, related_name='pricetable7_f01', db_column='ID', primary_key=True)  # Field name made lowercase.
    f21 = models.FloatField(db_column='F21', blank=True, null=True)  # Field name made lowercase.
    f22 = models.FloatField(db_column='F22', blank=True, null=True)  # Field name made lowercase.
    f21a = models.FloatField(db_column='F21a', blank=True, null=True)  # Field name made lowercase.
    f22a = models.FloatField(db_column='F22a', blank=True, null=True)  # Field name made lowercase.
    f21b = models.FloatField(db_column='F21b', blank=True, null=True)  # Field name made lowercase.
    f22b = models.FloatField(db_column='F22b', blank=True, null=True)  # Field name made lowercase.
    f22c = models.FloatField(db_column='F22c', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'pricetable7'

class PeopleStatic(models.Model):
    id = models.IntegerField(db_column='ID', primary_key=True)  # Field name made lowercase.
    sp00 = models.CharField(db_column='SP00', max_length=5, blank=True, null=True)  # Field name made lowercase.
    sp01 = models.CharField(db_column='SP01', max_length=50, blank=True, null=True)  # Field name made lowercase.
    sp02 = models.IntegerField(db_column='SP02', blank=True, null=True)  # Field name made lowercase.
    sp03 = models.CharField(db_column='SP03', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'People_Static'       

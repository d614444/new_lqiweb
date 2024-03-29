# Generated by Django 2.1 on 2019-02-15 08:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage', '0003_moneysupply'),
    ]

    operations = [
        migrations.CreateModel(
            name='GdpStatic',
            fields=[
                ('id', models.IntegerField(db_column='ID', primary_key=True, serialize=False)),
                ('year', models.CharField(blank=True, max_length=45, null=True)),
                ('year_t', models.CharField(blank=True, max_length=45, null=True)),
                ('gdp', models.FloatField(blank=True, null=True)),
            ],
            options={
                'managed': False,
                'db_table': 'GDP_Static',
            },
        ),
    ]

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Hotel.delete_all
Hotel.create({name: "Кобзарь", city_name: 'Геническ', dist_from_the_sea: 200, has_tv: true, has_parking: true})
Hotel.create({name: "Источник здоровья", city_name: 'Генгорка', dist_from_the_sea: 500, has_tv: true, has_parking: false})
Hotel.create({name: "Элит", city_name: 'Счастливцево', dist_from_the_sea: 50, has_tv: true, has_parking: true})
Hotel.create({name: "Комфорт Плюс", city_name: 'Счастливцево', dist_from_the_sea: 70, has_tv: true, has_parking: false})
Hotel.create({name: "Диканька", city_name: 'Стрелково', dist_from_the_sea: 20, has_tv: false, has_parking: true})


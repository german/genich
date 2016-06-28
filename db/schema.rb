# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160628124153) do

  create_table "albums", force: :cascade do |t|
    t.string   "name"
    t.integer  "hotel_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "articles", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.string   "permalink"
    t.string   "author"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "picture"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer  "hotel_id"
    t.integer  "user_id"
    t.integer  "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id"

  create_table "hotels", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "photo"
    t.string   "email"
    t.string   "phones"
    t.integer  "total_rooms"
    t.integer  "total_luxes"
    t.text     "rules"
    t.integer  "people_in_room"
    t.integer  "price_min"
    t.integer  "price_mean"
    t.integer  "price_max"
    t.string   "longitude"
    t.string   "latitude"
    t.string   "city_name"
    t.integer  "dist_from_the_sea"
    t.boolean  "has_private_house"
    t.boolean  "has_private_kitchen"
    t.boolean  "has_private_shower"
    t.boolean  "has_fridge"
    t.boolean  "has_tv"
    t.boolean  "has_conditioning"
    t.boolean  "has_wifi"
    t.boolean  "has_parking"
    t.boolean  "has_transfer"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "hotel_type"
    t.integer  "user_id"
    t.boolean  "has_pool"
    t.boolean  "has_food"
    t.boolean  "has_kettle"
    t.boolean  "has_sunbeds"
    t.boolean  "has_playground"
    t.integer  "cover_photo_id"
    t.boolean  "has_laundry"
  end

  add_index "hotels", ["city_name"], name: "index_hotels_on_city_name"
  add_index "hotels", ["dist_from_the_sea"], name: "index_hotels_on_dist_from_the_sea"
  add_index "hotels", ["has_conditioning"], name: "index_hotels_on_has_conditioning"
  add_index "hotels", ["has_fridge"], name: "index_hotels_on_has_fridge"
  add_index "hotels", ["has_parking"], name: "index_hotels_on_has_parking"
  add_index "hotels", ["has_private_house"], name: "index_hotels_on_has_private_house"
  add_index "hotels", ["has_private_kitchen"], name: "index_hotels_on_has_private_kitchen"
  add_index "hotels", ["has_private_shower"], name: "index_hotels_on_has_private_shower"
  add_index "hotels", ["has_transfer"], name: "index_hotels_on_has_transfer"
  add_index "hotels", ["has_tv"], name: "index_hotels_on_has_tv"
  add_index "hotels", ["has_wifi"], name: "index_hotels_on_has_wifi"
  add_index "hotels", ["price_max"], name: "index_hotels_on_price_max"
  add_index "hotels", ["price_mean"], name: "index_hotels_on_price_mean"
  add_index "hotels", ["price_min"], name: "index_hotels_on_price_min"
  add_index "hotels", ["user_id"], name: "index_hotels_on_user_id"

  create_table "photos", force: :cascade do |t|
    t.string   "photo"
    t.string   "name"
    t.string   "description"
    t.integer  "album_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string   "name",        null: false
    t.text     "description"
    t.integer  "hotel_id",    null: false
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

# Could not dump table "users" because of following NoMethodError
#   undefined method `[]' for nil:NilClass

end

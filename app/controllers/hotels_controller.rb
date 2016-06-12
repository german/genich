class HotelsController < ApplicationController
  #before_action :authenticate_user!, only: [:create, :update]
  #before_action :authenticate_current_user, only: [:create, :update]
  inherit_resources

  def index
    index! do |format|
      format.html { render }
      format.json do
        render json: collection.as_json(include: {albums: {methods: :cover, include: :photos}})
      end
    end
  end

  def show
    @albums = resource.albums
    @album = Album.new hotel: resource
    show! do |format|
      format.html { render }
      format.json do
        render json: resource.as_json(include: {albums: {methods: :cover, include: :photos}, reviews: {}})
      end
    end
  end

  def create
    create! do |success, failure|
      success.json { render json: @hotel }
      failure.json { render json: @hotel.errors, status: 422 }
    end
  end

  def update
    update! do |success, failure|
      success.json { render json: @hotel }
      failure.json { render json: @hotel.errors, status: 422 }
    end
  end

protected
	def hotel_params
		params.require(:hotel).permit(:id, :hotel_type, :has_pool, :albums, :reviews, :type, :name, :city_name, :has_parking, :total_rooms, :description, :email,
      :phones, :total_luxes, :rules, :people_in_room, :price_min, :price_mean, :price_max, :longitude, 
      :latitude, :dist_from_the_sea, :has_private_house, :has_private_kitchen, :has_private_shower, 
      :has_fridge, :has_tv, :has_conditioning, :has_wifi, :has_transfer, :user_id)
	end
end

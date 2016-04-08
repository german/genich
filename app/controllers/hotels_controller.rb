class HotelsController < ApplicationController
  inherit_resources

  def index
    index! do |format|
      format.html { render }
      format.json do
        render json: collection
      end
    end
  end

  def show
    @albums = resource.albums
    @album = Album.new hotel: resource
    show! do |format|
      format.html { render }
      format.json do
        render json: resource
      end
    end
  end

protected
	def hotel_params
		params.require(:hotel).permit(:name, :city_name, :has_parking, :total_rooms, :description, :email,
      :phones, :total_luxes, :rules, :people_in_room, :price_min, :price_mean, :price_max, :longitude, 
      :latitude, :dist_from_the_sea, :has_private_house, :has_private_kitchen, :has_private_shower, 
      :has_fridge, :has_tv, :has_conditioning, :has_wifi, :has_transfer)
	end
end

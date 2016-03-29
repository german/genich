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
    show!
  end

protected
	def hotel_params
		params.require(:hotel).permit(:name, :city_name, :has_parking, :total_rooms)
	end
end

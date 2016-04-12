class PhotosController < ApplicationController
  inherit_resources

  def create
    @photo = Photo.new(photo_params)

    @hotel = Hotel.find(params[:hotel_id])
    @album = @hotel.albums.find(params[:photo][:album_id])
    
    #@image.user = current_user
    @photo.album_id = @album.id if @album

    create! do |success, failure|
      success.html { redirect_to hotel_album_url(@hotel, @album) }
      success.js { render json: @album }
      failure.js { render json: @album.errors, status: 422 }
      failure.html { 
        Rails.logger.warn 'Error while creating photo: ' + @photo.errors.inspect
        redirect_to hotel_album_url(@hotel, @album) 
      }
    end
  end

  private
    def photo_params
      params.require(:photo).permit(:name, :album_id, :hotel_id, :photo, :description)
    end
end

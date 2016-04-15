class PhotosController < ApplicationController
  inherit_resources

  respond_to :html, :json

  def create
    @photo = Photo.new(photo: params[:file])

    @album = Album.find(params[:album_id])
    @hotel = @album.hotel
    #@image.user = current_user
    @photo.album_id = @album.id if @album

    create! do |success, failure|
      success.html { render text: 'OK' }
      success.js { render json: @photo }
      failure.js { render json: @photo.errors, status: 422 }
      failure.html { 
        Rails.logger.warn 'Error while creating photo: ' + @photo.errors.inspect
        render text: 'Error while creating photo: '+@photo.errors.inspect
      }
    end
  end

  private
    def photo_params
      params.require(:photo).permit(:name, :album_id, :hotel_id, :photo, :description)
    end
end

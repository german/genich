class FavoritesController < ApplicationController
  inherit_resources
  skip_before_filter :authenticate_user!, only: [:index, :create]
  respond_to :html, :json

  def create
    create! do |success, failure|
      success.json { render json: @favorite }
      failure.json { render json: @favorite.errors, status: 422 }
    end
  end

protected

  def collection
    if params[:user_id]
      get_collection_ivar || 
        set_collection_ivar(end_of_association_chain.where(user_id: params[:user_id]))
    else
      super
    end
  end

  def favorite_params
    params.require(:favorite).permit(:hotel_id, :user_id, :position)
  end
end

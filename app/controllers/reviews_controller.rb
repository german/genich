class ReviewsController < ApplicationController
  inherit_resources
  skip_before_filter :authenticate_user!, only: [:index, :create]
  respond_to :html, :json

  def create
    create! do |success, failure|
      success.json { render json: @hotel }
      failure.json { render json: @hotel.errors, status: 422 }
    end
  end

protected
  def review_params
    params.require(:review).permit(:name, :description, :hotel_id)
  end
end

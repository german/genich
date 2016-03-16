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
end

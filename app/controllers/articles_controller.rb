class ArticlesController < ApplicationController
  #before_action :authenticate_user!, only: [:create, :update]
  #before_action :authenticate_current_user, only: [:create, :update]
  inherit_resources
  respond_to :html, :json
  def index
    index! do |format|
      format.html { render }
      format.json do
        render json: collection.as_json
      end
    end
  end

  def show
    show! do |format|
      format.html { render }
      format.json do
        render json: resource.as_json
      end
    end
  end

  def create
    create! do |success, failure|
      success.json { render json: @article }
      failure.json { render json: @article.errors, status: 422 }
    end
  end

  def update
    update! do |success, failure|
      success.json { render json: @article }
      failure.json { render json: @article.errors, status: 422 }
    end
  end

protected
	def article_params
		params.require(:article).permit(:id, :title, :content, :author, :permalink)
	end
end

class RegistrationsController < Devise::RegistrationsController
  include DeviseTokenAuth::Concerns::SetUserByToken

  skip_before_filter :authenticate_scope!, only: [:update]
  before_filter :configure_permitted_parameters, :only => [:create]

  def create
    super
    Rails.logger.warn 'user.errors ' + resource.errors.inspect
    # could be changed later to #deliver_later
  #  UsersMailer.welcome(@user).deliver_now unless @user.invalid?
  end

  def update
    super
    Rails.logger.warn 'user.errors ' + resource.errors.inspect
  end

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :password, :role, 
      :password_confirmation) }
  end

private

  def sign_up_params
    params.require(:user).permit(:first_name, :email, :password, :current_password,
      :password_confirmation, :role)
  end

  def authenticate_user!(opts={})
    unless current_user
      return render json: {
        errors: ["Authorized users only."]
      }, status: 401
    end
  end

  def current_user
    super || User.find(params[:id])
  end
end

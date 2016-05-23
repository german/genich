class RegistrationsController < Devise::RegistrationsController
  before_filter :configure_permitted_parameters, :only => [:create]

  def create
    super
    Rails.logger.warn 'user.errors ' + resource.errors.inspect
    # could be changed later to #deliver_later
  #  UsersMailer.welcome(@user).deliver_now unless @user.invalid?
  end

protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:email, :password, :role, 
      :password_confirmation) }
  end

private

  def sign_up_params
    params.require(:user).permit(:first_name, :email, :password, 
      :password_confirmation, :role)
  end
end

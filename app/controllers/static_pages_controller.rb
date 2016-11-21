class StaticPagesController < ApplicationController
  def home
    @projects = Project.order(created_at: :desc).first(3)
  end

  def offer
  end

  def contact
    if params.present?
      MailerNotifierMailer.mail_to_me(params[:email], params[:name], params[:content]).present?
      redirect_to contact_path, notice: "Twoja wiadomość została wysłana"
    end
  end

end

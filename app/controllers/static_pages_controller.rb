class StaticPagesController < ApplicationController
  def home
    @projects = Project.where(show_on_home: true).order(created_at: :desc).includes(:resources).first(3)
  end

  def about
  end

  def contact
  end

  def mail
    MailerNotifierMailer.mail_to_me(params[:name],params[:email],params[:content]).deliver
    redirect_to contact_path, notice: "Twoja wiadomość została wysłana"
  end

end

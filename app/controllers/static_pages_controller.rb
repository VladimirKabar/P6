class StaticPagesController < ApplicationController
  def home
    @projects = Project.order(created_at: :desc).first(3)
  end

  def offer
  end

  def contact
  end

  def mail
    @name = params[:name]
    @email = params[:email]
    @content = params[:content]
    puts @name
    MailerNotifierMailer.mail_to_me(@name,@email,@content).deliver
    redirect_to contact_path, notice: "Twoja wiadomość została wysłana"
  end

end

class StaticPagesController < ApplicationController
  def home
    @projects = Project.order(created_at: :desc).first(3)
  end

  def offer
  end

  def kontakt
    @message = Message.new
  end

  def new
    @message = Message.new
  end

  def create
    @message = Message.new(message_params)
    if @message.valid?
      MailerNotifierMailer.mail_to_me(@message).deliver
      redirect_to kontakt_path, notice: "Twoja wiadomość została wysłana"
    else
      flash[:alert] = "Wystąpił błąd spróbuj jeszcze raz"
      render 'kontakt'
    end
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :content)
  end

end

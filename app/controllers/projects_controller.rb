class ProjectsController < ApplicationController

  def index
    @projects = Project.includes(:resources).filter(params[:category]).order(created_at: :desc)
  end

end

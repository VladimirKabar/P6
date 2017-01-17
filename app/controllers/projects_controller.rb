class ProjectsController < ApplicationController

  def index
    @projects = Project.includes(:resources).filter(params[:category]).order(position: :asc)
  end

end

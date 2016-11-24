class ProjectsController < ApplicationController
  #before_filter :authenticate_admin!, only: [:edit, :create, :destroy,:update]

  def index
    @projects = Project.all
    @category = params[:category]
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
  end

  def edit
    @project = Project.find(params[:id])
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      flash.now[:notice] = "Dodano nowy projekt"
      redirect_to @project

    else
      flash.now[:error] = "Nie mozna utworzyc projektu"
      redirect_to :back
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      flash.now[:notice] = "Poprawiono projekt"
      redirect_to @project
    else
      flash.now[:error] = "Nie mozna utworzyc projektu"
      redirect_to :back
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to root_url
  end

  def projects_realization
    @projects = Project.where(category: 'projekt')
  end

  def projects_visualization
    @projects = Project.where(category: 'wizualizacje')
  end

  private
  def project_params
    params.require(:project).permit(:title)
  end

end

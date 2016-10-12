class ResourcesController < ApplicationController

  def index
    @resources = Resource.all
  end

  def show
    @resource = Resource.find(params[:id])
  end

  def create
    @resource = Resource.new(resource_params)
    if @resource.save
      flash.now[:notice] = "Dodano nowy projekt"
    else
      flash.now[:error] = "Nie mozna dodac projektu"
      redirect_to :back
    end
  end

  def edit
    @resource = Resource.find(params[:id])
  end

  def update
    @resource = Resource.find(params[:id])
    if @resource.update(resource_params)
      redirect_to @resource
    else
      render 'edit'
    end
  end

  def destroy
    @resource = Resource.find(params[:id])
    @resource.destroy
    redirect_to root_url
  end

  private
  def resource_params
    params.require(:resource).permit(:title, :description, :image, :project_id)
  end

end

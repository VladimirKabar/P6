class StaticPagesController < ApplicationController
  def home
    @projects = Project.order(created_at: :desc).first(3)
  end

  def firma
  end

  def projekty
  end

  def kontakt
  end

  def test
  end
end

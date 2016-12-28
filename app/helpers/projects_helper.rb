module ProjectsHelper

  def project_title
    case params[:category]
    when 'outdoor_commercial' then 'zewnątrz - komercyjne'
    when 'outdoor_private' then 'zewnątrz - prywatne'
    when 'indoor_commercial' then 'wewnątrz - komercyjne'
    when 'indoor_private' then 'wewnątrz - prywatne'
    end
  end
end

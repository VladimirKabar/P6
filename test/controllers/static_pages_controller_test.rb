require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
  end

  test "should get firma" do
    get static_pages_firma_url
    assert_response :success
  end

  test "should get projekty" do
    get static_pages_projekty_url
    assert_response :success
  end

  test "should get kontakt" do
    get static_pages_kontakt_url
    assert_response :success
  end

end

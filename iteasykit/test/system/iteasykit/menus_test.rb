require "application_system_test_case"

module Iteasykit
  class MenusTest < ApplicationSystemTestCase
    setup do
      @menu = iteasykit_menus(:one)
    end

    test "visiting the index" do
      visit menus_url
      assert_selector "h1", text: "Menus"
    end

    test "creating a Menu" do
      visit menus_url
      click_on "New Menu"

      fill_in "Active", with: @menu.active
      fill_in "Csscls", with: @menu.csscls
      fill_in "Description", with: @menu.description
      fill_in "Elementcls", with: @menu.elementcls
      fill_in "Idcls", with: @menu.idcls
      fill_in "Machine Name", with: @menu.machine_name
      fill_in "Name", with: @menu.name
      click_on "Create Menu"

      assert_text "Menu was successfully created"
      click_on "Back"
    end

    test "updating a Menu" do
      visit menus_url
      click_on "Edit", match: :first

      fill_in "Active", with: @menu.active
      fill_in "Csscls", with: @menu.csscls
      fill_in "Description", with: @menu.description
      fill_in "Elementcls", with: @menu.elementcls
      fill_in "Idcls", with: @menu.idcls
      fill_in "Machine Name", with: @menu.machine_name
      fill_in "Name", with: @menu.name
      click_on "Update Menu"

      assert_text "Menu was successfully updated"
      click_on "Back"
    end

    test "destroying a Menu" do
      visit menus_url
      page.accept_confirm do
        click_on "Destroy", match: :first
      end

      assert_text "Menu was successfully destroyed"
    end
  end
end
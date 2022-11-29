class HomepageController < ApplicationController
  def index
    @greeting = Greeting.all.sample.text
  end
end

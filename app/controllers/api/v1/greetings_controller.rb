class Api::V1::GreetingsController < ApplicationController
  def index
    @greeting = Greeting.all.sample.text
    render json: { message: @greeting }
  end
end

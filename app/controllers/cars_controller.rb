class CarsController < ApplicationController
	def index
		@cars = Car.all
	end

	def show
		@car = Car.find(params[:id])
		@comments = @car.comments
	end
end
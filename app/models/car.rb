class Car < ActiveRecord::Base
	has_many :comments

	def to_s
		brand + " " + model
	end
end
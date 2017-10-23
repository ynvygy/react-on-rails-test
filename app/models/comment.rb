class Comment < ActiveRecord::Base
	belongs_to :car
	validates :car, presence: true
	has_ancestry
end
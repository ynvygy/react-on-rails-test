class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
    	t.string :author
    	t.text :body
    	t.integer :rank
    	t.belongs_to :car

    	t.timestamps
    end
  end
end

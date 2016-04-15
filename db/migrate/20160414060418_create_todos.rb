class CreateTodos < ActiveRecord::Migration
  def up
    create_table :todos do |t|
      t.string :title

      t.timestamps null: false
    end
  end

  def down
    drop_table :todos
  end
end

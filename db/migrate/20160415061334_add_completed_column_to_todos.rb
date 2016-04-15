class AddCompletedColumnToTodos < ActiveRecord::Migration
  def up
    add_column :todos, :completed, :boolean, :default => FALSE
  end

  def down
    remove_column :todos, :completed
  end
end

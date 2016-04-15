class Api::V1::TodosController < ApplicationController
  def index
    @todos = Todo.all
    respond_with @todos
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      respond_with :api, :v1, @todo, status
    else
      respond_with :api, :v1, status
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title)
  end
end

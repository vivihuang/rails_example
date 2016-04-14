class Api::V1::TodoController < ApplicationController
  def index
    @todos = Todo.all
    respond_with @todos
  end
end

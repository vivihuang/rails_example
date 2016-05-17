class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :updated_at, :created_at
end

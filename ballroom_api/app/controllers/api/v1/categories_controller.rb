# app/controllers/api/v1/categories_controller.rb
module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :set_ball
      before_action :set_category, only: %i[update destroy]

      # GET /api/v1/balls/:ball_id/categories
      def index
        categories = @ball.categories
        render json: categories, each_serializer: CategorySerializer
      end

      # POST /api/v1/balls/:ball_id/categories
      def create
        category = @ball.categories.new(category_params)
        if category.save
          render json: category, serializer: CategorySerializer, status: :created
        else
          render json: { errors: category.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/balls/:ball_id/categories/:id
      def update
        if @category.update(category_params)
          render json: @category, serializer: CategorySerializer
        else
          render json: { errors: @category.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/balls/:ball_id/categories/:id
      def destroy
        @category.destroy
        head :no_content
      end

      private

      def set_ball
        @ball = Ball.find(params[:ball_id])
      end

      def set_category
        @category = @ball.categories.find(params[:id])
      end

      def category_params
        params.require(:category).permit(:kind, :title, :description)
      end
    end
  end
end

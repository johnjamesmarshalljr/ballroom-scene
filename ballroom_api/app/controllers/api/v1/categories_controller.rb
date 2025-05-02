# app/controllers/api/v1/categories_controller.rb
module Api
  module V1
    class CategoriesController < ApplicationController
      before_action :set_ball, only: %i[index update destroy]
      before_action :set_category, only: %i[update destroy]

      # GET /api/v1/balls/:ball_id/categories
      def index
        categories = @ball.categories
        render json: categories, each_serializer: CategorySerializer
      end

      # POST /api/v1/balls/:ball_id/categories
      def create
        if params[:ball_id]
          @ball = Ball.find(params[:ball_id])
          category = @ball.categories.new(category_params)
        else
          category = Category.new(category_params)
        end

        if category.save
          render json: category, serializer: CategorySerializer, status: :created
        else
          Rails.logger.error("Category creation failed: ")
          Rails.logger.error(category.errors.full_messages)
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
        params.require(:category).permit(:title, :description, :category_type, :ball_id)
      end
    end
  end
end

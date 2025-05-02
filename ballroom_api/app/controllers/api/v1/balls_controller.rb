# app/controllers/api/v1/balls_controller.rb
module Api
  module V1
    class BallsController < ApplicationController
      before_action :set_ball, only: %i[show update destroy]

      # GET /api/v1/balls
      def index
        balls = Ball.all
        render json: balls, each_serializer: BallSerializer
      end

      # GET /api/v1/balls/:id
      def show
        render json: @ball, serializer: BallSerializer
      end

      # POST /api/v1/balls
      def create
        ball = Ball.new(ball_params)
        if ball.save
          if params[:category_ids]
            ball.associate_categories(params[:category_ids])
          end
          render json: ball, serializer: BallSerializer, status: :created
        else
          render json: { errors: ball.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/balls/:id
      def update
        if @ball.update(ball_params)
          render json: @ball, serializer: BallSerializer
        else
          render json: { errors: @ball.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/balls/:id
      def destroy
        @ball.destroy
        head :no_content
      end

      private

      def set_ball
        @ball = Ball.find(params[:id])
      end

      def ball_params
        params.require(:ball).permit(:name, :date, :location, :theme, :description, categories_attributes: [:kind, :title, :description])
      end
    end
  end
end

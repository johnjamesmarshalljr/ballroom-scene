# app/controllers/api/v1/forum_threads_controller.rb
module Api
  module V1
    class ForumThreadsController < ApplicationController
      before_action :set_forum_thread, only: %i[show update destroy]

      # GET /api/v1/forum_threads
      def index
        threads = ForumThread.all
        render json: threads, each_serializer: ForumThreadSerializer
      end

      # GET /api/v1/forum_threads/:id
      def show
        render json: @forum_thread, serializer: ForumThreadSerializer
      end

      # POST /api/v1/forum_threads
      def create
        thread = ForumThread.new(forum_thread_params)
        if thread.save
          render json: thread, serializer: ForumThreadSerializer, status: :created
        else
          render json: { errors: thread.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/forum_threads/:id
      def update
        if @forum_thread.update(forum_thread_params)
          render json: @forum_thread, serializer: ForumThreadSerializer
        else
          render json: { errors: @forum_thread.errors.full_messages }, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/forum_threads/:id
      def destroy
        @forum_thread.destroy
        head :no_content
      end

      private

      def set_forum_thread
        @forum_thread = ForumThread.find(params[:id])
      end

      def forum_thread_params
        params.require(:forum_thread).permit(:title, :author, :upvotes)
      end
    end
  end
end

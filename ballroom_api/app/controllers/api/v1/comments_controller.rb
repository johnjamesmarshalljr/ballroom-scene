# app/controllers/api/v1/comments_controller.rb
module Api
  module V1
    class CommentsController < ApplicationController
      before_action :set_forum_thread

      # GET /api/v1/forum_threads/:forum_thread_id/comments
      def index
        comments = @forum_thread.comments
        render json: comments, each_serializer: CommentSerializer
      end

      # POST /api/v1/forum_threads/:forum_thread_id/comments
      def create
        comment = @forum_thread.comments.new(comment_params)
        if comment.save
          render json: comment, serializer: CommentSerializer, status: :created
        else
          render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def set_forum_thread
        @forum_thread = ForumThread.find(params[:forum_thread_id])
      end

      def comment_params
        params.require(:comment).permit(:user, :content)
      end
    end
  end
end
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts, type BlogPost } from "@/lib/data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, Heart, MessageCircle, Share2, X, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { basePath } from "@/lib/utils"

export function BlogSection() {
  const { t, language } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const [likes, setLikes] = useState<Record<string, number>>(
    blogPosts.reduce((acc, post) => ({ ...acc, [post.id]: post.likes }), {})
  )
  const [liked, setLiked] = useState<Record<string, boolean>>({})
  const [commentsData, setCommentsData] = useState<
    Record<string, Array<{ name: string; phone: string; comment: string; email?: string }>>
  >(blogPosts.reduce((acc, post) => ({ ...acc, [post.id]: [] }), {}))
  const [commentForm, setCommentForm] = useState<{ name: string; phone: string; comment: string; email?: string }>({
    name: "",
    phone: "",
    comment: "",
    email: "",
  })
  const [showEmailPhone, setShowEmailPhone] = useState(false)
  const [pendingComment, setPendingComment] = useState("")

  const displayedPosts = showAll ? blogPosts : blogPosts.slice(0, 4)

  const handleLike = (postId: string) => {
    setLiked((prev) => ({ ...prev, [postId]: !prev[postId] }))
    setLikes((prev) => ({
      ...prev,
      [postId]: prev[postId] + (liked[postId] ? -1 : 1),
    }))
  }

  const handleShare = async (post: BlogPost) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === "en" ? post.title : post.titleNe,
          text: language === "en" ? post.excerpt : post.excerptNe,
        })
      } catch {
        // Share API not supported or user cancelled
      }
    }
  }

  const handleInitialCommentSubmit = (e: React.FormEvent, postId: string) => {
    e.preventDefault()
    if (!pendingComment.trim()) return
    setShowEmailPhone(true)
  }

  const handleFinalCommentSubmit = (e: React.FormEvent, postId: string) => {
    e.preventDefault()
    if (!commentForm.name || !commentForm.phone || !commentForm.email) return
    setCommentsData((prev) => ({
      ...prev,
      [postId]: [...prev[postId], { ...commentForm, comment: pendingComment }],
    }))
    setCommentForm({ name: "", phone: "", comment: "", email: "" })
    setPendingComment("")
    setShowEmailPhone(false)
  }

  return (
    <>
      <section 
        id="blog" 
        className="py-12 lg:py-16 bg-background dark:bg-gray-900 scroll-mt-32"
      >
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
              {language === 'en' ? 'Latest Updates' : 'नवीनतम जानकारी'}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-4 text-balance">
              {t.blog.title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {displayedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden h-full group hover:shadow-2xl transition-all duration-500 border-2 border-border dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 p-0">
                  {/* Image at top */}
                  <div className="relative w-full h-48 md:h-56 lg:h-60 overflow-hidden">
                    <Image
                      src={post.image ? `${basePath}${post.image}` : `${basePath}/placeholder.svg`}
                      alt={language === "en" ? post.title : post.titleNe}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 lg:p-5">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-foreground dark:text-white mb-3 line-clamp-2 text-balance">
                      {language === "en" ? post.title : post.titleNe}
                    </h3>

                    <p className="text-muted-foreground dark:text-gray-300 text-sm lg:text-base mb-2 line-clamp-3 leading-relaxed">
                      {language === "en" ? post.excerpt : post.excerptNe}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-border dark:border-gray-700">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-1 text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors group/like"
                        >
                          <Heart
                            className={`h-4 w-4 ${liked[post.id] ? "fill-primary text-primary" : ""} group-hover/like:scale-110 transition-transform`}
                          />
                          <span className="text-xs">{likes[post.id]}</span>
                        </button>
                        <div className="flex items-center gap-1 text-muted-foreground dark:text-gray-300">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-xs">{post.comments}</span>
                        </div>
                        <button
                          onClick={() => handleShare(post)}
                          className="flex items-center gap-1 text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors"
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedBlog(post)}
                        className="text-primary dark:text-primary hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white rounded-full font-medium transition-colors duration-300 py-1 px-3"
                      >
                        {t.blog.readMore}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          {blogPosts.length > 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="px-8 rounded-full border-2 hover:border-primary hover:bg-[#1e2d4d] hover:text-primary-foreground dark:hover:text-white"
              >
                {showAll ? t.blog.viewLess : t.blog.viewMore}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-background dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-background/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-border dark:border-gray-700 p-4 flex items-center justify-between">
                <Button variant="ghost" size="icon" onClick={() => setSelectedBlog(null)} className="rounded-full">
                  <ArrowLeft className="h-5 w-5 dark:text-white" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setSelectedBlog(null)} className="rounded-full">
                  <X className="h-5 w-5 dark:text-white" />
                </Button>
              </div>

              {/* Image + Content */}
              <div className="relative h-80">
                <Image
                  src={selectedBlog.image ? `${basePath}/${selectedBlog.image}` : `${basePath}/placeholder.svg`}
                  alt={language === "en" ? selectedBlog.title : selectedBlog.titleNe}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6 lg:p-10">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                  {selectedBlog.category}
                </span>

                <h2 className="text-3xl lg:text-4xl font-bold text-foreground dark:text-white mb-4 text-balance">
                  {language === "en" ? selectedBlog.title : selectedBlog.titleNe}
                </h2>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground dark:text-gray-400 mb-6 pb-6 border-b border-border dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedBlog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{selectedBlog.author}</span>
                  </div>
                </div>

                {/* Full Content */}
                <div className="prose prose-lg max-w-none mb-8 dark:prose-invert">
                  <p className="text-foreground/80 dark:text-gray-200 leading-relaxed text-pretty">
                    {language === "en" ? selectedBlog.content : selectedBlog.contentNe}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-6 pt-6 border-t border-border dark:border-gray-700 mb-6">
                  <button
                    onClick={() => handleLike(selectedBlog.id)}
                    className="flex items-center gap-2 text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors group/like"
                  >
                    <Heart
                      className={`h-5 w-5 ${liked[selectedBlog.id] ? "fill-primary text-primary" : ""} group-hover/like:scale-110 transition-transform`}
                    />
                    <span className="text-sm font-medium">
                      {likes[selectedBlog.id]} {t.blog.like}
                    </span>
                  </button>
                  <div className="flex items-center gap-2 text-muted-foreground dark:text-gray-300">
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {selectedBlog.comments} {t.blog.comment}
                    </span>
                  </div>
                  <button
                    onClick={() => handleShare(selectedBlog)}
                    className="flex items-center gap-2 text-muted-foreground dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm font-medium">{t.blog.share}</span>
                  </button>
                </div>

                {/* Comments Section */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-2 dark:text-white">{t.blog.comments}</h4>
                  {!showEmailPhone ? (
                    <form
                      className="flex flex-col gap-2 mb-4"
                      onSubmit={(e) => handleInitialCommentSubmit(e, selectedBlog.id)}
                    >
                      <textarea
                        placeholder={t.blog.comment}
                        value={pendingComment}
                        onChange={(e) => setPendingComment(e.target.value)}
                        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2d4d] bg-white dark:bg-gray-800 dark:text-white border-border dark:border-gray-700"
                        required
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="self-end bg-[#1e2d4d] text-white hover:bg-primary rounded-full shadow"
                      >
                        {t.blog.next}
                      </Button>
                    </form>
                  ) : (
                    <form
                      className="flex flex-col gap-2 mb-4 animate-fade-in"
                      onSubmit={(e) => handleFinalCommentSubmit(e, selectedBlog.id)}
                    >
                      <input
                        type="text"
                        placeholder={t.blog.name}
                        value={commentForm.name}
                        onChange={(e) => setCommentForm((f) => ({ ...f, name: e.target.value }))}
                        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2d4d] bg-white dark:bg-gray-800 dark:text-white border-border dark:border-gray-700"
                        required
                      />
                      <input
                        type="email"
                        placeholder={t.blog.email}
                        value={commentForm.email || ""}
                        onChange={(e) => setCommentForm((f) => ({ ...f, email: e.target.value }))}
                        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2d4d] bg-white dark:bg-gray-800 dark:text-white border-border dark:border-gray-700"
                        required
                      />
                      <input
                        type="tel"
                        placeholder={t.blog.phone}
                        value={commentForm.phone}
                        onChange={(e) => setCommentForm((f) => ({ ...f, phone: e.target.value }))}
                        className="border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e2d4d] bg-white dark:bg-gray-800 dark:text-white border-border dark:border-gray-700"
                        required
                      />
                      <Button
                        type="submit"
                        size="sm"
                        className="self-end bg-[#1e2d4d] text-white hover:bg-primary rounded-full shadow"
                      >
                        {t.blog.addComment}
                      </Button>
                    </form>
                  )}

                  {/* Comments List */}
                  <div className="flex flex-col gap-3">
                    {commentsData[selectedBlog.id]?.map((c, i) => (
                      <div
                        key={i}
                        className="border rounded-lg p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-semibold text-[#1e2d4d] dark:text-white">{c.name}</div>
                          <span className="text-xs text-gray-400 dark:text-gray-300">{c.phone}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{}</span>
                          <span className="text-xs text-gray-400 dark:text-gray-300">
                            {new Date().toLocaleDateString()}{" "}
                            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                          </span>
                        </div>
                        <div className="mt-2 text-gray-700 dark:text-gray-200">{c.comment}</div>
                      </div>
                    ))}
                    {commentsData[selectedBlog.id]?.length === 0 && (
                      <div className="text-xs text-gray-400 dark:text-gray-300">{t.blog.noComments}</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

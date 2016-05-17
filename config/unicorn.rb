deploy_to   = '/var/www/rest-in-ukraine.com'
rails_root  = "#{deploy_to}/current"
pid_file    = "#{deploy_to}/shared/tmp/pids/unicorn.pid"
socket_file = "#{deploy_to}/shared/tmp/sockets/unicorn.sock"
old_pid     = pid_file + ".oldbin"

rails_env = ENV["RAILS_ENV"] || "staging"

stderr_path "#{deploy_to}/shared/log/unicorn.err"
stdout_path "#{deploy_to}/shared/log/unicorn.log"

timeout 180
worker_processes 2
listen socket_file
pid pid_file

preload_app true

working_directory = rails_root

GC.copy_on_write_friendly = true if GC.respond_to?(:copy_on_write_friendly=)

before_exec do |server|
  ENV['BUNDLE_GEMFILE'] = "#{deploy_to}/current/Gemfile"
end

before_fork do |server, worker|
  defined?(ActiveRecord::Base) and ActiveRecord::Base.connection.disconnect!

  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
    end
  end
end

after_fork do |server, worker|
  defined?(ActiveRecord::Base) and ActiveRecord::Base.establish_connection
end

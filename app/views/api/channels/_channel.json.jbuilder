json.extract! channel, :id, :name
json.messages do  
  channel.messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
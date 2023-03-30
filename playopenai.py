import openai
import ssl
ssl.match_hostname = lambda cert, hostname: True

openai.api_key = "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"

# Define your prompt and parameters
prompt = "Hello, how are you?"
model = "text-davinci-002"
temperature = 0.5

# Generate the chat completion
response = openai.Completion.create(
    engine=model,
    prompt=prompt,
    temperature=temperature,
    max_tokens=60
)

# Extract the response text
message = response.choices[0].text.strip()

# Print the response
print(message)
